using System;

namespace code4money.Web.Models
{
    public class ImageUpload
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public DateTime TimeStamp { get; set; } = DateTime.UtcNow;

        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }
    }
}