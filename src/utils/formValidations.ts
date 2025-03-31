export const validateEmail = (email: string) => {
    const trimmedEmail = email.trim()
    if (!trimmedEmail) return []

    const errors = []

    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    const isValidEmailFormat = emailRegex.test(trimmedEmail)

    if (!trimmedEmail.includes('@')) errors.push('Email must include @ character')

    if (!isValidEmailFormat) errors.push('Not a valid email format')

    return errors
}

export const validatePassword = (password: string) => {
    if (!password) return []

    const errors = []

    if (password.length <= 6)
        errors.push('Password must be more than 6 characters')

    return errors
}