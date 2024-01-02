using CryptoApp.Models;
using CryptoApp.Services;
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
        private readonly ICoinCapService _coinCapService;

        public CoinCapController(ICoinCapService coinCapService)
        {
            _coinCapService = coinCapService;
        }
        [HttpGet("getCryptoData")]
        public async Task<ActionResult<object>> GetCryptoData()
        {
            var cryptoData = await _coinCapService.GetCryptoData();

            // Преобразуем значения словаря в список
            var cryptoList = cryptoData.Values.ToList();

            // Создаем анонимный объект с ключом "data"
            var result = new
            {
                data = cryptoList
            };

            // Возвращаем объект в формате JSON
            return result;
        }



        [HttpGet("getCryptocurrency/{id}")]
        public async Task<ActionResult> GetCryptocurrency(string id)
        {
            var cryptoData = await _coinCapService.GetCryptocurrency(id);
            if (cryptoData != null)
            {
                return new JsonResult(cryptoData);
            }
            else
            {
                return NotFound($"Cryptocurrency with id {id} not found.");
            }

        }
        [HttpGet("getTopMovers")]
        public async Task<JsonResult> GetTopMovers()
        {
            var cryptoData = await _coinCapService.GetTopThreeCryptocurrencies();

            var result = new
            {
                data = cryptoData
            };

            // Возвращаем объект в формате JSON
            return new JsonResult(result);


        }
    }
}
