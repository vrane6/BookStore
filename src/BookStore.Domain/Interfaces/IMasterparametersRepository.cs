using BookStore.Domain.Interfaces;
using BookStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MasterparametersStore.Domain.Interfaces
{
    public interface IMasterparametersRepository : IRepository<Masterparameters>
    {
        new Task<List<Masterparameters>> GetAll();
        new Task<Masterparameters> GetById(int id);
        Task<IEnumerable<Masterparameters>> GetMasterparameterssByCategory(int categoryId);
        Task<IEnumerable<Masterparameters>> SearchMasterparametersWithCategory(string searchedValue);
    }
}
