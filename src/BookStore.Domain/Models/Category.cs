﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Domain.Models
{
    public class Category : Entity
    {
        public string Name { get; set; }

        public IEnumerable<Book> Books { get; set; }
    }
}
