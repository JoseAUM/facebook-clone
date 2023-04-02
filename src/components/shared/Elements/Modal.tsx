import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  show: boolean;
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
  closable?: boolean;
}

export default function Modal({
  show,
  children,
  title,
  onClose,
  closable,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    addEventListener('click', handleClickOutside, true);

    return () => {
      removeEventListener('click', handleClickOutside, true);
    };
  }, [show, onClose]);
  return (
    <>
      <div className="modal-element">
        {show && (
          <div className="modal-backdrop">
            <dialog ref={ref} className="modal-container" open={show}>
              {title && (
                <div className="modal-title">
                  <h1>Create Post</h1>
                  <Link href="" onClick={() => closable && onClose()}>
                    <Image
                      className="icon-circle-background"
                      src="/images/utilities/close.svg"
                      alt="Close"
                      width={27}
                      height={27}
                    />
                  </Link>
                </div>
              )}
              <div className="modal-content">{children}</div>
            </dialog>
          </div>
        )}
      </div>
    </>
  );
}
