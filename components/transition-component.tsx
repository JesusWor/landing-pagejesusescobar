"use client"

import { fadeIn } from '@/utils/motion-transition'
import { motion } from 'framer-motion'

interface MotionTransitionProps{
    children: React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}

{/* Se esta creando un componente que va a llevar algunos argumentos para las animaciones
    de algunos de nuestros componentes */}

const MotionTransition = (props: MotionTransitionProps) => {
    const { children, position, className } = props
    return(
        <motion.div
        
        variants={fadeIn(position)}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={className}
        >
            {children}
        </motion.div>
    );
}

export default MotionTransition