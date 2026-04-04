import * as motion from "motion/react-client"
  const box = {
    width: 70,
    height: 70,
    borderRadius: 5,
}

export function FancySkill({ iconPath, text }: { iconPath: string, text: string }) {
    return (
            <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <motion.button
                    style={box}
                    animate={{ rotate: 360 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    
                >
                    <svg width={50} height={50} viewBox="0 0 24 24" fill="currentColor">
                        <path d={iconPath} />
                    </svg>
                    {/* <div>{text}</div> */}
                </motion.button>
                </div>

    );
}