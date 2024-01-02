using CryptoApp.Models;

namespace CryptoApp.Services
{
    public interface ICoinCapService
    {
        Task<Dictionary<string, Cryptocurrency>> GetCryptoData();

        Task<Cryptocurrency> GetCryptocurrency(string id);

        Task<List<Cryptocurrency>> GetTopThreeCryptocurrencies();
    }
}
