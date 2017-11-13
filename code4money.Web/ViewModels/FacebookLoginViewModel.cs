using System;
using System.ComponentModel.DataAnnotations;

namespace code4money.Web.ViewModels
{
    public class FacebookLoginViewModel
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        
        public DateTime? BirthDate { get; set; }
    }
}