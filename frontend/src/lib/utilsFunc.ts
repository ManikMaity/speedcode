export function getErrorMessage(error: any) {
    const message = error.explanation[0] || error.message || "Something went wrong";
    return message;
}