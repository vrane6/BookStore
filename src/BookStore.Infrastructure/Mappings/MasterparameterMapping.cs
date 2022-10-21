using BookStore.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Infrastructure.Mappings
{
    public class MasterparameterMapping : IEntityTypeConfiguration<Masterparameters>
    {
        public void Configure(EntityTypeBuilder<Masterparameters> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Mp_Name)
                .IsRequired()
                .HasColumnType("varchar(150)");

            builder.Property(c => c.Mp_Short_Name)
                .IsRequired()
                .HasColumnType("varchar(50)");

            //1 : N => Category : Books

            builder.ToTable("Masterparameters");
        }
    }
}
