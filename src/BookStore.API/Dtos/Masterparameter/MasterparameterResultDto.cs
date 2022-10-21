using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.API.Dtos.Masterparameter
{
    public class MasterparameterResultDto
    {
        public int Id { get; set; }
        public string Mp_Short_Name { get; set; }
        public string Mp_Name { get; set; }
        public bool Mp_ComboList { get; set; }
    }
}
