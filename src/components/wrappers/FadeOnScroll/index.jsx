import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

export default function FadeOnScroll ({children, className}) {

        const ref = useRef()
        const [visible, setVisible] = useState(false)

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setVisible(entry.isIntersecting)
                },
            {   
                root: null,
                rootMargin: "0px",
                threshold: 0.1, 
            } // Adjust threshold as needed
            );
        
            const el = ref.current;
            if (el) observer.observe(el);
        
            return () => {
                if (el) observer.unobserve(el);
            };
        }, [visible]);

    return (
        <div 
        ref={ref}
        style={{
            transition: "all 1s var(--curve-snap)",
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0.75
        }}
        className={classNames(className)}
        >
            {children}
        </div>
    );
}