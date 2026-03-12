import { useState } from "react";

export const PlaylistModal = ({ videoId, closeModel, playlist }) => {
  const [newPlaylistName, setNewPlaylistName] = useState();
  const [playlistId, setPlaylistId] = useState();

  const handleOnChange = (e) => {
    e.preventDefault();
    setNewPlaylistName(e.target.value);
  };
  console.log(newPlaylistName);

  const handleOnClick = (playlistId, videoId) => {
    console.log(playlistId);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={closeModel}
      >
        <div
          className=" bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-[#11141B] p-6 rounded-2xl w-96 border border-white/10 shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Save to...</h2>

            <div className="max-h-60 overflow-y-auto space-y-3 mb-6">
              {playlist.map((pl) => (
                <label
                  key={pl._id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    onChange={() => setPlaylistId(pl._id)}
                
                    className="w-5 h-5 accent-purple-600"
                  />
                  <span className="text-zinc-300 group-hover:text-white transition-colors">
                    {pl.name}
                  </span>
                </label>
              ))}
              <button
                className="w-full bg-purple-600 py-2 rounded-full font-bold hover:bg-purple-500 transition-all"
                onClick={()=>handleOnClick(playlistId)}
              >
                Add
              </button>
            </div>

            <div className="pt-4 border-t border-white/5">
              <input
                type="text"
                onChange={handleOnChange}
                placeholder="Enter playlist name..."
                className="w-full bg-white/5 border border-white/10 p-2 rounded-lg focus:outline-none focus:border-purple-500 mb-3 text-sm"
              />
              <button className="w-full bg-purple-600 py-2 rounded-full font-bold hover:bg-purple-500 transition-all">
                Create & Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
