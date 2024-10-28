USE [master]
GO
/****** Object:  Database [BTTHUCHANH]    Script Date: 10/28/2024 2:58:16 PM ******/
CREATE DATABASE [BTTHUCHANH]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BTTHUCHANH', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\BTTHUCHANH.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BTTHUCHANH_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\BTTHUCHANH_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [BTTHUCHANH] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BTTHUCHANH].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BTTHUCHANH] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET ARITHABORT OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BTTHUCHANH] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BTTHUCHANH] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET  ENABLE_BROKER 
GO
ALTER DATABASE [BTTHUCHANH] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BTTHUCHANH] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET RECOVERY FULL 
GO
ALTER DATABASE [BTTHUCHANH] SET  MULTI_USER 
GO
ALTER DATABASE [BTTHUCHANH] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BTTHUCHANH] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BTTHUCHANH] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BTTHUCHANH] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BTTHUCHANH] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BTTHUCHANH] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'BTTHUCHANH', N'ON'
GO
ALTER DATABASE [BTTHUCHANH] SET QUERY_STORE = ON
GO
ALTER DATABASE [BTTHUCHANH] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [BTTHUCHANH]
GO
/****** Object:  Table [dbo].[Cart]    Script Date: 10/28/2024 2:58:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cart](
	[id] [varchar](12) NULL,
	[UserId] [nvarchar](12) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CartDetail]    Script Date: 10/28/2024 2:58:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CartDetail](
	[id] [varchar](12) NULL,
	[idCart] [varchar](12) NULL,
	[idProduct] [varchar](12) NULL,
	[quantity] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 10/28/2024 2:58:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[id] [varchar](20) NULL,
	[productName] [nvarchar](20) NULL,
	[picture] [varchar](max) NULL,
	[unitPrice] [float] NULL,
	[description] [nvarchar](max) NULL,
	[category] [nvarchar](20) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Receipt]    Script Date: 10/28/2024 2:58:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Receipt](
	[id] [varchar](12) NULL,
	[idUser] [varchar](12) NULL,
	[TotalPrice] [float] NULL,
	[date] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ReceiptDetail]    Script Date: 10/28/2024 2:58:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceiptDetail](
	[id] [varchar](12) NULL,
	[idProduct] [varchar](12) NULL,
	[quantity] [int] NULL,
	[idReceipt] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserManage]    Script Date: 10/28/2024 2:58:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserManage](
	[id] [varchar](12) NULL,
	[username] [nvarchar](20) NULL,
	[email] [nvarchar](max) NULL,
	[password] [nvarchar](20) NULL,
	[phone] [varchar](20) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[Product] ([id], [productName], [picture], [unitPrice], [description], [category]) VALUES (N'f314f817-1', N'Coca ', N'', 10000, N'Thức uống từ công ty coca cola', N'Nước uống')
INSERT [dbo].[Product] ([id], [productName], [picture], [unitPrice], [description], [category]) VALUES (N'c13b151b-1', N'Miranda', N'', 10000, N'Nước cam ngọt đóng lon', N'Nước uống')
INSERT [dbo].[Product] ([id], [productName], [picture], [unitPrice], [description], [category]) VALUES (N'a0fc641a-a', N'Tiramisu', N'', 100000, N'Bánh kem sữa từ phô mai', N'Bánh')
INSERT [dbo].[Product] ([id], [productName], [picture], [unitPrice], [description], [category]) VALUES (N'dabc4496-7', N'Chocolate', N'', 100000, N'Kẹo ngọt xuất xứ từ Mỹ', N'Kẹo')
INSERT [dbo].[Product] ([id], [productName], [picture], [unitPrice], [description], [category]) VALUES (N'535a2a6e-5', N'Poca', N'', 15000, N'Bánh snack vị khoai tây ', N'Snack')
INSERT [dbo].[Product] ([id], [productName], [picture], [unitPrice], [description], [category]) VALUES (N'ad982dda-a', N'Kitkat', N'C:\fakepath\KitKat-socola-2F-17g.jpg', 5000, N'Hello', N'Socola')
GO
INSERT [dbo].[UserManage] ([id], [username], [email], [password], [phone]) VALUES (N'Admin', N'duongmhien', N'duongminhhien14@gamil.com', N'123456', N'0825950038')
INSERT [dbo].[UserManage] ([id], [username], [email], [password], [phone]) VALUES (N'user01', N'votranchi', N'votranchi@gmail.com', N'123456', N'0903229434')
INSERT [dbo].[UserManage] ([id], [username], [email], [password], [phone]) VALUES (N'user02', N'phuonggiakiet', N'phuonggiakiet2004@gmail.com', N'123456', N'0908224076')
GO
USE [master]
GO
ALTER DATABASE [BTTHUCHANH] SET  READ_WRITE 
GO
