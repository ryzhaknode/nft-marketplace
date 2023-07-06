import datajson from "../nftsItems.json";
export function loader({ params }) {
  const card = datajson.find((d) => d.nftCodeNumber8 == params.contactId);
  return { card };
}
