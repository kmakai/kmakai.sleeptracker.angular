using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using kmakai.sleeptracker.angular.Data;
using kmakai.sleeptracker.angular.Models;
using Microsoft.EntityFrameworkCore;

namespace kmakai.sleeptracker.angular.Controllers;

[Route("api/Sleep[controller]")]
[ApiController]
public class RecordController : ControllerBase
{
    private readonly SleepTrackerContext _context;
    public RecordController(SleepTrackerContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Record>>> GetRecords()
    {
        return await _context.Records.ToListAsync();
    }
}
