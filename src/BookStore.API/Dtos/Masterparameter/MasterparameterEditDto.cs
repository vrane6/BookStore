using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.API.Dtos.Masterparameter
{
    public class MasterparameterEditDto
    {
        [Key]
        [Required(ErrorMessage = "The field {0} is required")]
        public int Id { get; set; }

        [StringLength(150, ErrorMessage = "The field {0} must between {2} and {1} characters", MinimumLength = 2)]
        public string Mp_Short_Name { get; set; }
        [Required(ErrorMessage = "The field {0} is required")]
        [StringLength(150, ErrorMessage = "The field {0} must be between {2} and {1} characters", MinimumLength = 2)]
        public string Mp_Name { get; set; }
        public bool Mp_ComboList { get; set; }
    }
}
