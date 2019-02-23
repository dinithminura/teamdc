export class AppConstants {
    public static API_ENDPOINT='https://api.devrant.thusitha.site/v1/';

    public static API_USER_ACTIVATE = "user.activate";

    public static API_USER_DEACTIVATE = "user.deactivate";

    public static API_POST_LIST = "post.list";

    public static API_POST_ADD = "post.add";

    public static API_POST_DETAILS = "post.details?postId=Kt3T2jXXi6XofMTGUArzrt";

    public static API_POST_DELETE = "post.delete";

    public static API_POST_VOTE = "post.vote";

    public static API_COMMENT_ADD = "comment.add";

    public static API_COMMENT_DELETE = "comment.delete";



    public static INVALID_CREDENTIALS = "Invalid user name or password";

    public static INVALID_TOKEN = "Provided token is not valid for user deactivation.";

    public static SERVER_ERROR = "A server side error has been occurred.";

    public static ACCESS_DENIED = "Invalid token or no access is granted";

    public static MISSING_CONTENT = "Content is missing in the request body";

    public static INVALID_POST_ID = "Post ID is not valid or not found";

    public static MISSING_DIRECTION = "Vote direction is not available. Available values are up, down and reset";

    public static 	AUTHOR_CANNOT_VOTE = "Post author can not vote on his/her post";

    public static 	MISSING_COMMENT = "Comment text is missing in the request body";

    public static 	MISSING_COMMENT_ID = "Comment ID is not found in the request body";

    public static 	MISSING_POST_ID = "Post ID is not found in the request body";


 }