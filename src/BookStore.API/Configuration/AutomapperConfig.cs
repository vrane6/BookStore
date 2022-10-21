using AutoMapper;
using BookStore.API.Dtos.Book;
using BookStore.API.Dtos.Category;
using BookStore.API.Dtos.Masterparameter;
using BookStore.API.Dtos.Registration;
using BookStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.API.Configuration
{
    public class AutomapperConfig : Profile
    {
        public AutomapperConfig()
        {
            CreateMap<Category, CategoryAddDto>().ReverseMap();
            CreateMap<Category, CategoryEditDto>().ReverseMap();
            CreateMap<Category, CategoryResultDto>().ReverseMap();

            CreateMap<Book, BookAddDto>().ReverseMap();
            CreateMap<Book, BookEditDto>().ReverseMap();
            CreateMap<Book, BookResultDto>().ReverseMap();

            CreateMap<Masterparameters, MasterparameterAddDto>().ReverseMap();
            CreateMap<Masterparameters, MasterparameterEditDto>().ReverseMap();
            CreateMap<Masterparameters, MasterparameterResultDto>().ReverseMap();



            CreateMap<UserForRegistrationDto, User>().ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
        }
    }
}
