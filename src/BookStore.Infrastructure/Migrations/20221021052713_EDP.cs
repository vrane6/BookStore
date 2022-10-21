using Microsoft.EntityFrameworkCore.Migrations;

namespace BookStore.Infrastructure.Migrations
{
    public partial class EDP : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4f37b98e-25d2-4ef1-9029-527c425b77b9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "aa4f8e6d-3f3a-4464-858f-a51b38356a3b");

            migrationBuilder.CreateTable(
                name: "Masterparameters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mp_Short_Name = table.Column<string>(type: "varchar(50)", nullable: false),
                    Mp_Name = table.Column<string>(type: "varchar(150)", nullable: false),
                    Mp_ComboList = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Masterparameters", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "84692c4b-313c-44e5-97ce-b1aaa3c59db3", "6162154e-71b3-484c-8edd-8fc4d0353279", "Viewer", "VIEWER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "dcd9480e-dee1-4118-aa60-8c3c75ffe505", "d92b3e1b-ab24-4448-b25e-979fdc5cce28", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Masterparameters");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84692c4b-313c-44e5-97ce-b1aaa3c59db3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dcd9480e-dee1-4118-aa60-8c3c75ffe505");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "4f37b98e-25d2-4ef1-9029-527c425b77b9", "87bdbf18-a767-4284-b7fe-d4f1d5e20deb", "Viewer", "VIEWER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "aa4f8e6d-3f3a-4464-858f-a51b38356a3b", "35e3e378-68e4-4804-a68f-114484b519e0", "Administrator", "ADMINISTRATOR" });
        }
    }
}
