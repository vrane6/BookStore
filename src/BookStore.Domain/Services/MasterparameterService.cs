using BookStore.Domain.Models;
using MasterparametersStore.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Domain.Services
{
    public class MasterparameterService : IMasterparametersService
    {
        private readonly IMasterparametersRepository _masterparametersRepository;

        public MasterparameterService(IMasterparametersRepository masterparametersRepository)
        {
            _masterparametersRepository = masterparametersRepository;
        }

        public async Task<Masterparameters> Add(Masterparameters Masterparameters)
        {
            if (_masterparametersRepository.Search(b => b.Mp_Name == Masterparameters.Mp_Name).Result.Any())
            {
                return null;
            }
            await _masterparametersRepository.Add(Masterparameters);
            return Masterparameters;

        }

        public void Dispose()
        {
            _masterparametersRepository?.Dispose();
        }

        public async Task<IEnumerable<Masterparameters>> GetAll()
        {
            return await _masterparametersRepository.GetAll();
        }

        public async Task<Masterparameters> GetById(int id)
        {
            return await _masterparametersRepository.GetById(id);
        }

        public async Task<IEnumerable<Masterparameters>> GetMasterparameterssByCategory(int categoryId)
        {
            return await _masterparametersRepository.GetMasterparameterssByCategory(categoryId);
        }

        public async Task<bool> Remove(Masterparameters Masterparameters)
        {
            await _masterparametersRepository.Remove(Masterparameters);
            return true;
        }

        public async Task<IEnumerable<Masterparameters>> Search(string MasterparametersName)
        {
            return await _masterparametersRepository.Search(c => c.Mp_Name.Contains(MasterparametersName));
        }

        public async Task<IEnumerable<Masterparameters>> SearchMasterparametersWithCategory(string searchedValue)
        {
            return await _masterparametersRepository.SearchMasterparametersWithCategory(searchedValue);
        }

        public async Task<Masterparameters> Update(Masterparameters Masterparameters)
        {
            if (_masterparametersRepository.Search(b => b.Mp_Name == Masterparameters.Mp_Name && b.Id != Masterparameters.Id).Result.Any())
            {
                return null;
            }

            await _masterparametersRepository.Update(Masterparameters);
            return Masterparameters;
        }
    }
}
