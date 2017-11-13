namespace code4money.Web.Models
{
    public class UserPostData<T>
    {
        public SimpleUserVM user { get; set; }
        public T data { get; set; }
    }
}