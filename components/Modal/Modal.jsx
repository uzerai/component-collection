import PropTypes from 'prop-types';
import React from 'react';
import { generateStyles } from '../../shared/variationsHelper';
// Components using this import must follow the VARIATIONS / SIZES pattern.
import { Button } from '../Button/Button';
import './modal.css';



/** 
 *  ######################################################
 *  #            VARIATION and SIZE controls             #
 *  ######################################################
 */

const VARIATIONS = {
  default: {
    // It is strongly advised _not_ to alter these styles.
    fixedContainer: [
      'fixed',
      'w-full',
      'h-full',
      'z-50',
      'inset-0',
      'flex',
      'justify-center',
      'items-center',
      'modal-bg',
    ],
    body: [
      'absolute',
      'bg-white',
      'dark:bg-dark-2',
      'rounded',
      'shadow-lg',
      'overflow-y-auto',
    ],
    title: [
      'text-2xl',
      'font-bold',
      'dark:text-white',
    ],
    content: [
      'pt-4', 'dark:text-white'
    ],
    buttons: [
      'flex', 'justify-end', 'gap-3', 'pt-6'
    ]
  }
}

const SIZES = {
  default: {
    fixedContainer: [],
    body: [
      'py-5',
      'px-6',
      'w-1/2',
    ],
    title: [],
    content: [],
    buttons: [],
  }
}

/** 
 *  ######################################################
 *  #                  Component logic                   #
 *  ######################################################
 */

/**
 * The default button which comes in a number of variations.
 */
export const Modal = ({ name, title, visible, acceptText, closeText, onClose, onAccept, variation, size, children }) => {
  const modalName = `${name}-modal`
  const { 
    body: bodyStyles,
    fixedContainer: fixedContainerStyles,
    title: titleStyles,
    content: contentStyles,
    buttons: buttonStyles,
  } = generateStyles(variation, size, VARIATIONS, SIZES);

  return <div className={fixedContainerStyles.join(' ').concat(` ${visible ? '' : ' hidden'}`)} 
    aria-labelledby={`${modalName}-title`} role='dialog' aria-modal='true'>
    <div className={bodyStyles.join(' ')}>
      <p id={`${modalName}-title`} className={titleStyles.join(' ')}>{title}</p>
      <div id={`${modalName}-content`} className={contentStyles.join(' ')}>
        {children}
      </div>
      <div className={buttonStyles.join(' ')} >
        <Button label={closeText}  variation='secondary' onClick={() => onClose()} />
        <Button label={acceptText} variation='primary' onClick={() => onAccept()} />
      </div>
    </div>
  </div>
};

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  acceptText: PropTypes.string,
  closeText: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  variation: PropTypes.oneOf(Object.keys(VARIATIONS)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node
  ]),
};

Modal.defaultProps = {
  name: 'Modal',
  acceptText: 'Accept',
  closeText: 'Cancel',
  visible: false,
  size: 'default',
};