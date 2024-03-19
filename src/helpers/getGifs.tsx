type GifJsonResponse = {
  data: GifData[]
}

type GifImages = {
  downsized_medium: {
    url: string
  }
}

type GifData = {
  id: string;
  title: string;
  images: GifImages;
}

export type GifResponse = {
  id: string;
  title: string;
  url: string;
}

export const getGifs = async (category: string): Promise<GifResponse[]> => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=mZGJwiJYGuUUdHZWJgFj0Cplhay1Egno&q=${category}&limit=10`;
  const resp = await fetch( url );
  const { data = [] } = await resp.json() as GifJsonResponse;

  const gifs: GifResponse[] = data.map( (img: GifData) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  }));

  return gifs;
}
