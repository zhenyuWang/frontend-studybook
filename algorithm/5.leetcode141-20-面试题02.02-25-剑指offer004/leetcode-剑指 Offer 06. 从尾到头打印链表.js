var reversePrint = function(head) {
  const ret = [];
  let cur = head;
  while(cur){
      ret.unshift(cur.val)
      cur = cur.next;
  }
  return ret;
};