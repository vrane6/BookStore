using BookStore.Domain.Models;
using BookStore.Infrastructure.Context;
using MasterparametersStore.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Infrastructure.Repositories
{
    public class MasterparameterRepository : Repository<Masterparameters>, IMasterparametersRepository
    {
        public MasterparameterRepository(BookStoreDbContext bookStoreDb) : base(bookStoreDb)
        {
        }

        public Task<IEnumerable<Masterparameters>> GetMasterparameterssByCategory(int categoryId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Masterparameters>> SearchMasterparametersWithCategory(string searchedValue)
        {
            throw new NotImplementedException();
        }
    }
}
