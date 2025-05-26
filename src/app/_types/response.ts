
export class GenericResponse<T = unknown> {
    data: T | null
    errors: Record<string, string> | null
    constructor(
        data: T | null,
        errors: Record<string, string> | null
    ) {
        this.data = data;
        this.errors = errors;
    }
}