export interface IToast {
  id: string
  message: string
  type: string
}

let nextId = 0
let toasts: IToast[] = []
const listeners: Set<() => void> = new Set()

export const toastStore = {
  toast({ type, message }: { type: string; message: string }) {
    toasts = [...toasts, { type, message, id: 'toast-' + nextId++ }]
    emitChange()
  },

  removeToast(id: string) {
    toasts = toasts.filter((toast) => toast.id !== id)
    emitChange()
  },

  subscribe(listener: () => void) {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },

  getSnapshot() {
    return toasts
  },
}

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}
