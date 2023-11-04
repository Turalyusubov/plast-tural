import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const Reveal = ({ children, direction, customClass }) => {
    // const [initial, setInitial] = useState({})

    // useEffect(() => {
    //     switch (direction) {
    //         case 'up':
    //             setInitial({ y: 50, opacity: 0, })
    //             break;
    //         case 'down':
    //             setInitial({ y: -50, opacity: 0, })
    //             break;
    //         case 'left':
    //             setInitial({ x: 50, opacity: 0, })
    //             break;
    //         case 'right':
    //             setInitial({ x: -50, opacity: 0, })
    //             break;
    //         default:
    //             setInitial({ x: -50, opacity: 0, })
    //     }
    // }, [direction])

    // const [ref, inView] = useInView();
    // useEffect(() => {
    //     if (inView) {
    //         controls.start("visible");
    //     }
    // }, [inView]);

    const initial = {
        up: { y: 70, opacity: 0 },
        down: { y: -70, opacity: 0 },
        left: { x: 70, opacity: 0 },
        right: { x: -70, opacity: 0 },
    };

    const animate = {
        up: { y: 0, opacity: 1 },
        down: { y: 0, opacity: 1 },
        left: { x: 0, opacity: 1 },
        right: { x: 0, opacity: 1 },
    };

    return (
        <motion.div className={customClass}
            viewport={{ once: true }}
            initial={initial[direction]}
            whileInView={animate[direction]}
            exit={initial[direction]}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
