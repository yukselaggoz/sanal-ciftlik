using MySql.Data.MySqlClient;
using SanalCiftlik.Typess;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SanalCiftlik.DATALAYER
{
    public class Dal
    {
        static string connectionString = "server=localhost;user id=root;password=3306;persistsecurityinfo=True;database=sanalciftlik;SslMode=none";
        public static string GetConnectionString()
        {
            return connectionString;
        }


        public static List<Kullanici> Get_Kullanici()
        {
            string PROC_NAME = "Kullanici_Listesi";
            MySqlConnection conn = new MySqlConnection(connectionString);
            MySqlCommand cmd = new MySqlCommand(PROC_NAME, new MySqlConnection(GetConnectionString()));
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection.Open();
            MySqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            List<Kullanici> KULLANICI_LISTESI = new List<Kullanici>();
            while (dr.Read())
            {
                KULLANICI_LISTESI.Add(new Kullanici()
                {
                    KULLANICI_ID = dr.GetInt32("KULLANICI_ID"),
                    KULLANICI_AD = dr.GetString("KULLANICI_AD"),
                    KULLANICI_SIFRE = dr.GetString("KULLANICI_SIFRE"),
                    AD_SOYAD = dr.GetString("AD_SOYAD"),
                    HAYVAN1 = dr.GetInt32("HAYVAN1"),
                    HAYVAN2 = dr.GetInt32("HAYVAN2"),
                    HAYVAN3 = dr.GetInt32("HAYVAN3"),
                    HAYVAN4 = dr.GetInt32("HAYVAN4"),
                    HAYVAN5 = dr.GetInt32("HAYVAN5"),
                    HAYVAN6 = dr.GetInt32("HAYVAN6"),
                    HAYVAN7 = dr.GetInt32("HAYVAN7"),
                    HAYVAN8 = dr.GetInt32("HAYVAN8"),
                    HAYVAN9 = dr.GetInt32("HAYVAN9"),
                    HAYVAN10 = dr.GetInt32("HAYVAN10"),
                    DEPO_MIKTARI = dr.GetInt32("DEPO_MIKTARI"),
                    YEM_MIKTARI = dr.GetInt32("YEM_MIKTARI"),
                    CUZDAN = dr.GetInt32("CUZDAN"),
                    IBAN = dr.GetString("IBAN")
                });
            }
            dr.Close();
            return KULLANICI_LISTESI;
        }
        public static List<Kullanici> Get_Kullanici(string KULLANICI_AD,string SIFRE)
        {

            MySqlConnection baglanti = new MySqlConnection(connectionString);
            MySqlCommand komut = new MySqlCommand("Kullanici_Listesi_by_User", baglanti);
            komut.CommandType = CommandType.StoredProcedure;
            komut.Parameters.Add(new MySqlParameter("PKULLANICI_AD", KULLANICI_AD));
            komut.Parameters.Add(new MySqlParameter("PSIFRE", SIFRE));
            baglanti.Open();
            MySqlDataReader dr = komut.ExecuteReader(CommandBehavior.CloseConnection);
            List<Kullanici> KULLANICI_LISTESI = new List<Kullanici>();
            while (dr.Read())
            {
                KULLANICI_LISTESI.Add(new Kullanici()
                {
                    KULLANICI_ID = dr.GetInt32("KULLANICI_ID"),
                    KULLANICI_AD = dr.GetString("KULLANICI_AD"),
                    KULLANICI_SIFRE = dr.GetString("KULLANICI_SIFRE"),
                    AD_SOYAD = dr.GetString("AD_SOYAD"),
                    HAYVAN1 = dr.GetInt32("HAYVAN1"),
                    HAYVAN2 = dr.GetInt32("HAYVAN2"),
                    HAYVAN3 = dr.GetInt32("HAYVAN3"),
                    HAYVAN4 = dr.GetInt32("HAYVAN4"),
                    HAYVAN5 = dr.GetInt32("HAYVAN5"),
                    HAYVAN6 = dr.GetInt32("HAYVAN6"),
                    HAYVAN7 = dr.GetInt32("HAYVAN7"),
                    HAYVAN8 = dr.GetInt32("HAYVAN8"),
                    HAYVAN9 = dr.GetInt32("HAYVAN9"),
                    HAYVAN10 = dr.GetInt32("HAYVAN10"),
                    DEPO_MIKTARI = dr.GetInt32("DEPO_MIKTARI"),
                    YEM_MIKTARI = dr.GetInt32("YEM_MIKTARI"),
                    CUZDAN = dr.GetInt32("CUZDAN"),
                    IBAN = dr.GetString("IBAN")
                });
            }
            dr.Close();
            return KULLANICI_LISTESI;
        }
        public static List<Kullanici> Set_Kullanici(string KULLANICI_AD, string SIFRE)
        {

            MySqlConnection baglanti = new MySqlConnection(connectionString);
            MySqlCommand komut = new MySqlCommand("Kullanici_Kaydet", baglanti);
            komut.CommandType = CommandType.StoredProcedure;
            komut.Parameters.Add(new MySqlParameter("PKULLANICI_AD", KULLANICI_AD));
            komut.Parameters.Add(new MySqlParameter("PKULLANICI_SIFRE", SIFRE));
            komut.Parameters.Add(new MySqlParameter("PAD_SOYAD", SIFRE));
            komut.Parameters.Add(new MySqlParameter("PIBAN", SIFRE));
            baglanti.Open();
            MySqlDataReader dr = komut.ExecuteReader(CommandBehavior.CloseConnection);
            List<Kullanici> KULLANICI_LISTESI = new List<Kullanici>();
            while (dr.Read())
            {
                KULLANICI_LISTESI.Add(new Kullanici()
                {
                    KULLANICI_ID = dr.GetInt32("KULLANICI_ID"),
                    KULLANICI_AD = dr.GetString("KULLANICI_AD"),
                    KULLANICI_SIFRE = dr.GetString("KULLANICI_SIFRE"),
                    AD_SOYAD = dr.GetString("AD_SOYAD"),
                    HAYVAN1 = dr.GetInt32("HAYVAN1"),
                    HAYVAN2 = dr.GetInt32("HAYVAN2"),
                    HAYVAN3 = dr.GetInt32("HAYVAN3"),
                    HAYVAN4 = dr.GetInt32("HAYVAN4"),
                    HAYVAN5 = dr.GetInt32("HAYVAN5"),
                    HAYVAN6 = dr.GetInt32("HAYVAN6"),
                    HAYVAN7 = dr.GetInt32("HAYVAN7"),
                    HAYVAN8 = dr.GetInt32("HAYVAN8"),
                    HAYVAN9 = dr.GetInt32("HAYVAN9"),
                    HAYVAN10 = dr.GetInt32("HAYVAN10"),
                    DEPO_MIKTARI = dr.GetInt32("DEPO_MIKTARI"),
                    YEM_MIKTARI = dr.GetInt32("YEM_MIKTARI"),
                    CUZDAN = dr.GetInt32("CUZDAN"),
                    IBAN = dr.GetString("IBAN")
                });
            }
            dr.Close();
            return KULLANICI_LISTESI;
        }

        public static void Hayvan_Sat(int animalNo,string userName)
        {
            MySqlConnection baglanti = new MySqlConnection(connectionString);
            MySqlCommand komut = new MySqlCommand("Hayvan_Sat", baglanti);
            komut.CommandType = CommandType.StoredProcedure;
            komut.Parameters.Add(new MySqlParameter("PKULLANICI_AD", userName));
            komut.Parameters.Add(new MySqlParameter("PHAYVAN_NO", animalNo));
            baglanti.Open();
            komut.ExecuteReader();
            baglanti.Close();
        }
    }
}
