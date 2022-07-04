import React from 'react'

const Email = () => {
  return (
    <>
    <div class="card card-table round mt-3 mb-5">
    <table class="table table-striped table-borderless text-black mb-0 lh-lg">
        <thead>
            <tr>
                <th class="py-4 font-24 weight-700"><div class="weight-500">New Message</div></th>
                <th></th>
            </tr>
        </thead>
    </table>
    <div class="bg-gray p-4 rounded-bottom-lg">
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="tab-1" role="tabpanel">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control lg rounded-md border-0" id="" value="" placeholder="Subject"/>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control rounded-md border-0 p-4 font-16" rows="7" placeholder="Type a message here…"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary px-5 py-3 rounded-md font-18 col-sm-2">Send</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
</>
  )
}

export default Email