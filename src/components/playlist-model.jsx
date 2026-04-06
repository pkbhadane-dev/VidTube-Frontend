import {
  useAddVideoToPlaylist,
  useCreatePlaylist,
  useFetchPlaylist,
} from "@/hooks/usePlaylist";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";

// fetch playlist to show on playlist model

export const PlaylistModal = ({ videoId, closeModel }) => {
  const [playlistData, setPlaylistIdData] = useState({
    title: "",
  });
  const [playlistId, setPlaylistId] = useState();

  const { user } = useAuthStore();

  const { data: playlists } = useFetchPlaylist(user?._id);
  const { mutate: playlist, isPending } = useCreatePlaylist();

  const { mutate } = useAddVideoToPlaylist();

  const handleOnChange = (e) => {
    e.preventDefault();
    setPlaylistIdData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    playlist({ playlistData: playlistData, videoId: videoId });
  };

  return (
    <>
      <div
        className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={closeModel}
      >
        <div
          className=" bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-[#11141B] p-6 rounded-2xl w-96 border border-white/10 shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Save to...</h2>

            <div className="max-h-60 overflow-y-auto space-y-3 mb-6">
              {playlists?.map((pl) => (
                <label
                  key={pl?._id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    onChange={() => setPlaylistId(pl._id)}
                    className="w-5 h-5 accent-purple-600"
                  />
                  <span className="text-zinc-300 group-hover:text-white transition-colors">
                    {pl?.title}
                  </span>
                </label>
              ))}
              <button
                className="w-full bg-purple-600 py-2 rounded-full font-bold hover:bg-purple-500 transition-all"
                onClick={() =>
                  mutate({ playlistId: playlistId, videoId: videoId })
                }
              >
                Add
              </button>
            </div>

            <div className="pt-4 border-t border-white/5">
              <input
                type="text"
                name="title"
                onChange={handleOnChange}
                placeholder="Enter playlist name..."
                className="w-full bg-white/5 border border-white/10 p-2 rounded-lg focus:outline-none focus:border-purple-500 mb-3 text-sm"
              />
              <button
                onClick={handleOnClick}
                className="w-full bg-purple-600 py-2 rounded-full font-bold hover:bg-purple-500 transition-all"
              >
                Create & Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
