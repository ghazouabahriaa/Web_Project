export class GlobalConstants {
    //message
    public static genericError: string = "Something went wrong. Please try again later";
    public static unauthroized: string = "You are not authorized person to access this page."
    //regex
    public static nameRegex: string = "[a-zA-Z0-9 ]*";

    public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    public static contactNumberRegex: string = "^[e0-9]{8,8}$";

    //variable
    public static error: string = "error";
}