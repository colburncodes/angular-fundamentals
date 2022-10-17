
namespace SimpleCrm
{
    public class ApiException : Exception
    {
        public ApiException(Exception ex) : base("An exception occured.", ex)
        {
            StatusCode = 500; // typical 500 for exceptions
        }
        public ApiException(Exception ex, object model) : base("An exception occured.", ex)
        {
            Model = model;
            StatusCode = 500; // typical 500 for exceptions
        }
        public ApiException(Exception ex, int statusCode) : base("An exception occured.", ex)
        {
            StatusCode = statusCode;
        }
        public ApiException(Exception ex, object model, int statusCode) : base("An exception occured.", ex)
        {
            Model = model;
            StatusCode = statusCode;
        }
        public ApiException(string message) : base(message)
        {
        }
        public ApiException(string message, int statusCode) : base(message)
        {
            StatusCode = statusCode;
        }
        /// <summary>
        /// Any form of state to be shared with the API client, not an internal exception detail.
        /// </summary>
        public object Model { get; set; }
        /// <summary>
        /// An Http Status code, meeting REST specifications.
        /// </summary>
        public int StatusCode { get; set; }
    }
}
