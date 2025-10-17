import * as React from 'react';
import Image from 'next/image';

const IcbrLogo = ({ className }: { className?: string }) => (
    <div className={className} style={{ position: 'relative', width: '200px', height: '50px' }}>
        <Image
            src="/logo.png"
            alt="ICBR Logo"
            fill
            style={{ objectFit: 'contain' }}
        />
    </div>
);

export default IcbrLogo;
