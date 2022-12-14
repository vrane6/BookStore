using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.API.Dtos.Book
{
    public class BookEditDto
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "The field {0} is required")]
        public int CategoryId { get; set; }

        [Required(ErrorMessage ="The field {0} is required")]
        [StringLength(150,ErrorMessage ="The filed {0} must be between {2} and {1} characters")]
        public string Name { get; set; }

        [Required(ErrorMessage = "The field {0} is required")]
        [StringLength(150, ErrorMessage = "The filed {0} must be between {2} and {1} characters")]
        public string Author { get; set; }
        public string Description { get; set; }
        public double Value { get; set; }
        public DateTime PublishDate { get; set; }
    }
}
