/* @flow */

export default function promiseMiddleware(): Function {
  return (next: Function) => (action: Object): Promise<Object> => {
    const { promise, types, ...rest } = action
    if (!promise) return next(action)
    const [REQUEST, SUCCESS, ERROR] = types
    next({ ...rest, type: REQUEST })
    return promise.then(
      (response) => next({ ...rest, response, type: SUCCESS }),
      (error) => next({ ...rest, error, type: ERROR })
    )
  }
}
