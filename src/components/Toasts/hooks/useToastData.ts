import { useSyncExternalStore } from 'react'
import { toastStore } from '../../../store/ToastStore.ts'

export function useToastData() {
  return useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot)
}
