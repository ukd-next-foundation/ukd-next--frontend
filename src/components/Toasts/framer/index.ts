export const toastVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.3 },
  show: { opacity: 1, y: 0, scale: 1 },
  end: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
}

export const progressVariants = {
  fromTop: { scaleY: 1.2 },
  toBottom: { scaleY: 0 },
}
