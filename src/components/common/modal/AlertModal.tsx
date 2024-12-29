import { Modal, ModalContent, ModalBody, ModalFooter } from '@nextui-org/react';
import React from 'react';

import TextButton from '../button/TextButton';
import Text from '../text/Text';

interface IBottomModalProps {
  isOpen?: boolean;
  onOpenChange?: () => void;
  title: string;
  cancelText?: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export default function AlertModal({
  isOpen,
  onOpenChange,
  title,
  cancelText = '취소',
  confirmText,
  onCancel,
  onConfirm,
}: IBottomModalProps) {
  const handleAction = (closeModal: () => void, action?: () => void) => {
    if (action) action();
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="m-0"
      hideCloseButton
      size="xs"
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="px-16 py-6 text-center">
              <Text weight="bold">{title}</Text>
            </ModalBody>
            <ModalFooter className="border-t-gray gap-0 p-0">
              {[
                {
                  text: cancelText,
                  color: 'black' as const,
                  action: onCancel,
                  additionalClass: 'border-r-gray',
                },
                {
                  text: confirmText,
                  color: 'primary-100' as const,
                  action: onConfirm,
                },
              ].map(({ text, color, action, additionalClass }) => (
                <TextButton
                  key={text}
                  size="14px"
                  color={color}
                  onClick={() => handleAction(onClose, action)}
                  className={`flex-1 rounded-none py-4 ${additionalClass ?? ''}`}
                >
                  {text}
                </TextButton>
              ))}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
