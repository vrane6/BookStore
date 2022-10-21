using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Domain.Models
{
    public class Masterparameters : Entity
    {
        //public int Mp_Code { get; set; }
        public string Mp_Short_Name { get; set; }
        public string Mp_Name { get; set; }
        public bool Mp_ComboList { get; set; }
    }
}
