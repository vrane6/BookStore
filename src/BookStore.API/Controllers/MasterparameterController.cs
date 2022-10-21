using AutoMapper;
using BookStore.API.Dtos.Book;
using BookStore.API.Dtos.Masterparameter;
using BookStore.Domain.Models;
using MasterparametersStore.Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MasterparameterController : MainController
    {
        private readonly IMapper _mapper;
        private readonly IMasterparametersService _masterparametersService;

        public MasterparameterController(IMapper mapper, IMasterparametersService masterparametersService)
        {
            _mapper = mapper;
            _masterparametersService = masterparametersService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var masterparameters = await _masterparametersService.GetAll();
            return Ok(_mapper.Map<IEnumerable<MasterparameterResultDto>>(masterparameters));

        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var masterparameters = await _masterparametersService.GetById(id);

            if (masterparameters == null)
                return NotFound();

            return Ok(_mapper.Map<MasterparameterResultDto>(masterparameters));


        }

       /* [HttpGet]
        [Route("get-books-by-category/{categoryId:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetBooksByCategory(int categoryId)
        {
            var masterparameters = await _masterparametersService.GetMasterparameterssByCategory(categoryId);

            if (!masterparameters.Any())
                return NotFound();

            return Ok(_mapper.Map<IEnumerable<MasterparameterResultDto>>(masterparameters));


        }*/

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Add(MasterparameterAddDto masterparameterAddDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var masterparameter = _mapper.Map<Masterparameters>(masterparameterAddDto);

            var masterparameterResult = await _masterparametersService.Add(masterparameter);

            if (masterparameterResult == null)
                return BadRequest();

            return Ok(_mapper.Map<MasterparameterResultDto>(masterparameterResult));

        }
        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(int id, MasterparameterEditDto masterparameterEditDto)
        {
            if (id != masterparameterEditDto.Id) return BadRequest();

            if (!ModelState.IsValid) return BadRequest();

            await _masterparametersService.Update(_mapper.Map<Masterparameters>(masterparameterEditDto));

            return Ok(masterparameterEditDto);
        }

        [HttpDelete("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Remove(int id)
        {
            var masterparameter = await _masterparametersService.GetById(id);
            if (masterparameter == null) return NotFound();

            await _masterparametersService.Remove(masterparameter);

            return Ok();
        }

        [HttpGet]
        [Route("search/{Paramtername}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Masterparameters>>> Search(string parameterName)
        {
            var masterparameter = _mapper.Map<List<Masterparameters>>(await _masterparametersService.Search(parameterName));

            if (masterparameter == null || masterparameter.Count == 0) return NotFound("None masterparameter was founded");

            return Ok(masterparameter);
        }

       /* [HttpGet]
        [Route("search-book-with-category/{searchedValue}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Masterparameters>>> SearchBookWithCategory(string searchedValue)
        {
            var masterparameter = _mapper.Map<List<Masterparameters>>(await _masterparametersService.SearchMasterparametersWithCategory(searchedValue));

            if (!masterparameter.Any()) return NotFound("None book was founded");

            return Ok(_mapper.Map<IEnumerable<MasterparameterResultDto>>(masterparameter));
        }*/



    }
}
