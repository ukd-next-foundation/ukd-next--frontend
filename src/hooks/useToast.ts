import { toastStore } from '../store/ToastStore.ts'

export function useToast() {
  return toastStore
}

/*
 *   I know that functionality of this hook looks very seriously,
 *   but I don't know how sending errors from the server will look like,
 *   if it will pretty much simple and obviously, maybe that hook will be removed
 */
