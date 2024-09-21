using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace asp_dotnet_web.Attributes
{
    public class PasswordStrengthAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var password = value as string;

            if (string.IsNullOrWhiteSpace(password))
            {
                return new ValidationResult("Password is required.");
            }

            // Check for minimum length
            if (password.Length < 6)
            {
                return new ValidationResult("Password must be at least 6 characters long.");
            }

            // Check for at least one number
            if (!Regex.IsMatch(password, @"\d"))
            {
                return new ValidationResult("Password must contain at least one number.");
            }

            // Check for at least one special character
            if (!Regex.IsMatch(password, @"[!@#$%^&*(),.?""{}|<>]"))
            {
                return new ValidationResult("Password must contain at least one special character.");
            }

            return ValidationResult.Success;
        }
    }
}