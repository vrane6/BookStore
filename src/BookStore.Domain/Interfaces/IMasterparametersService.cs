using BookStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MasterparametersStore.Domain.Interfaces
{
    public interface IMasterparametersService : IDisposable
    {
        Task<IEnumerable<Masterparameters>> GetAll();
        Task<Masterparameters> GetById(int id);
        Task<Masterparameters> Add(Masterparameters Masterparameters);
        Task<Masterparameters> Update(Masterparameters Masterparameters);
        Task<bool> Remove(Masterparameters Masterparameters);
        Task<IEnumerable<Masterparameters>> GetMasterparameterssByCategory(int categoryId);
        Task<IEnumerable<Masterparameters>> Search(string MasterparametersName);
        Task<IEnumerable<Masterparameters>> SearchMasterparametersWithCategory(string searchedValue);
    }
}
