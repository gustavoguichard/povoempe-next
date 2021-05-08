import Head from 'next/head'
import Markdown from 'react-markdown'
import data from '../data'

const IndexPage = () => (
  <>
    <Head>
      <title>{[data.title, data.domain].join(' | ')}</title>
    </Head>
    <div className="w-screen mt-0 mb-10 flex justify-center border-green-700 border-b-8 py-12 bg-gray-200">
      <img
        src="/logo.png"
        className="w-56 h-56 object-contain bg-white py-6 px-10 rounded-lg max-w-full"
        alt="Povo em Pé"
      />
    </div>
    <div className="p-8 flex flex-col items-center text-gray-600 border-green-700 border-b-8 pb-12">
      <h1 className="text-center mb-10 text-green-800 font-semibold">
        {data.title}
        <br />
        <small className="text-xl">{data.subtitle}</small>
      </h1>
      <div className="max-w-lg">
        <img
          src="/mae_terra_malu_kluwe.jpg"
          alt="Mae terra, por Malu Kluwe"
          className="max-w-full mb-1"
        />
      </div>
      <div className="max-w-3xl tracking-tight leading-snug flex flex-col items-center">
        <p className="text-gray-600 text-sm">Imagem da artista Malu Kluwe</p>
        <blockquote className="my-6 italic">
          <Markdown>{data.firstBlock}</Markdown>
        </blockquote>
        <Markdown className="rich-text mb-8">{data.content}</Markdown>
        <div className="flex flex-col gap-4 md:flex-row justify-center items-center md:items-start">
          <img src="/mais_amor.gif" alt="Mais Amor" className="max-w-full" />
          <blockquote className="max-w-xl italic">
            <Markdown>{data.lastBlock}</Markdown>
          </blockquote>
        </div>
      </div>
    </div>
    <div className="text-xs bg-gray-100 text-green-900 text-center p-4 py-6 font-semibold">
      {new Date().getFullYear()} - {data.copy}
    </div>
  </>
)

export default IndexPage
