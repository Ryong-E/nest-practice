import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.movieService.getOne(id);
  }

  @Post('/:id')
  create(@Body() movieData: CreateMovieDto) {
    console.log(movieData);
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.movieService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() movieData) {
    return this.movieService.update(id, movieData);
  }
}
