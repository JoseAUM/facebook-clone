import React from 'react';
import Image from 'next/image';

interface Props {
  type?: string;
  placeholder?: string;
  value?: string;
}

export default function Input({ type, placeholder, value }: Props) {
  return (
    <div className="input-container">
      <span>
        {type === 'search' && (
          <Image src="/search.svg" alt="search" width={18} height={18} />
        )}
      </span>
      <input
        placeholder={placeholder}
        value={value}
        className="input-element"
      />
    </div>
  );
}
