using CryptoApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Threading.Tasks;

namespace CryptoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoinCapController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly HttpClient _httpClient;
        private readonly Dictionary<string, Cryptocurrency> _cryptoDictionary;



        public CoinCapController(IConfiguration configuration, IHttpClientFactory httpClientFactory)
        {
            
            _configuration = configuration;

            _httpClientFactory = httpClientFactory;
            _httpClient = _httpClientFactory.CreateClient();
            _cryptoDictionary = new Dictionary<string, Cryptocurrency>();
        }
        [HttpGet("getCryptoData")]
        public async Task<JsonResult> GetCryptoData()
        {
            var client = _httpClient;

            string apiUrl = "https://api.coincap.io/v2/assets";

            var response = await client.GetAsync(apiUrl);
            var jsonObject = JsonConvert.DeserializeObject<dynamic>(await response.Content.ReadAsStringAsync());
            var dataArray = jsonObject.data;
            foreach (var item in dataArray)
            {
                Cryptocurrency cryptocurrency = new Cryptocurrency
                {
                    id = item.id,
                    rank = item.rank,
                    symbol = item.symbol,
                    name = item.name,
                    supply = item.supply,
                    maxSupply = item.maxSupply == null ? "Infinite" : item.maxSupply,
                    marketCapUsd = item.marketCapUsd,
                    volumeUsd24Hr = item.volumeUsd24Hr,
                    priceUsd = item.priceUsd,
                    changePercent24Hr = item.changePercent24Hr,
                    vwap24Hr = item.vwap24Hr == null ? "-" : item.vwap24Hr,
                    imageUrl = $"https://assets.coincap.io/assets/icons/{item.symbol.ToString().ToLower()}@2x.png"
                };
                _cryptoDictionary[cryptocurrency.id] = cryptocurrency;



            }
            return new JsonResult(_cryptoDictionary.Values.ToList());



        }
    }
}
