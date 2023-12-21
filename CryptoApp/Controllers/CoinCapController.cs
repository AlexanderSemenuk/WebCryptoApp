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
        public async Task<JsonResult> GetCryptoData()
        {
            var cryptoData = await _coinCapService.GetCryptoData();
            return new JsonResult(cryptoData);
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
    }
}
